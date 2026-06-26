/**
 * Simple JavaScript file for GitHub practice
 */

console.log('🎓 GitHub Training Project Loaded');

// Function to display git commands
function showGitCommands() {
    const commands = [
        'git init',
        'git add .',
        'git commit -m "message"',
        'git push origin main',
        'git pull origin main',
        'git branch',
        'git checkout -b feature-branch'
    ];
    
    console.log('Common Git Commands:');
    commands.forEach((cmd, index) => {
        console.log(`${index + 1}. ${cmd}`);
    });
}

// Initialize
showGitCommands();

// Export for module systems
module.exports = { showGitCommands };
