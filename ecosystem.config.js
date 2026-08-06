module.exports = {
  apps: [
    {
      name: "zalloco",
      cwd: "/root/zalloco",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 7012
      },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "800M",
      error_file: "/root/.pm2/logs/zalloco-error.log",
      out_file: "/root/.pm2/logs/zalloco-out.log",
      log_date_format: "DD/MM/YYYY HH:mm:ss"
    }
  ]
};
