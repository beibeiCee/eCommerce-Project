module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26387f83902e94c2a99120060b986132'),
  },
});
