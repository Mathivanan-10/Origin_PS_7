module.exports = {
    uiPort: process.env.PORT || 1880,
    httpAdminRoot: '/',
    httpNodeRoot: '/',
    userDir: '/data',
    flowFile: 'flows.json',
    credentialSecret: "your-secret-here",
    adminAuth: null,
    functionGlobalContext: { },
    debugMaxLength: 1000,
    mqttReconnectTime: 5000,
    serialReconnectTime: 5000,
    editorTheme: {
        projects: { enabled: false },
        palette: { categories: ['subflows', 'common', 'function', 'network', 'sequence', 'parser', 'storage', 'dashboard'] }
    }
};
