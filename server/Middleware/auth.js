import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";

// Replace with your Clerk JWKS URL
const jwksUri = 'https://suited-dassie-33.clerk.accounts.dev/.well-known/jwks.json';

const client = jwksClient({
  jwksUri: jwksUri,
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

 const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }

    req.user = user;
    next();
  });
};

export default authenticateToken
