module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a3db398f6ef24ab0cdd98ee0baaccf9e'),
  },
});
