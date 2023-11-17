Database Pass: YBFdfbTxsYDPwTtE

Database URI: postgresql://postgres:YBFdfbTxsYDPwTtE@db.npgqalkenuqjoelahxns.supabase.co:5432/postgres

```js
module.exports = {
  apps: [
    {
      name: "shifashionid",
      script: "./bin/www",
      env: {
        NODE_ENV: "production",
        PORT: 80,
        JWT_SECRET: "shifashionpass",
        MIDTRANS_SERVER_KEY: "SB-Mid-server-_-Nv7JnkWKLo-Nwa3udimKZ2",
        DEV_EMAIL: "syifasarah19@gmail.com",
        DEV_PASS: "aztfwImvNjqhD1P3",
        DATABASE_URL:
          "postgresql://postgres:YBFdfbTxsYDPwTtE@db.npgqalkenuqjoelahxns.supabase.co:5432/postgres",
      },
    },
  ],
};
```
