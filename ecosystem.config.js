module.exports = {
    apps: [
        {
            name: 'portfolio-nextjs',
            script: "node",
            args: "server.js",
            cwd: "/home/altair823/portfolio-nextjs/.next/standalone",
            instances: 0,
            autorestart: true,
            exec_mode: "fork",
            listen_timeout: 50000,
            kill_timeout: 5000,
        }
    ]
};