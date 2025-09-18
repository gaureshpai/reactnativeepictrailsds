const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Remove and recreate dist directory
const distDir = path.join(__dirname, 'dist');

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

fs.mkdirSync(distDir, { recursive: true });

console.log('Building TypeScript...');

// Build CommonJS
try {
  console.log('Building CommonJS (compatible components only)...');
  execSync('npx tsc --project tsconfig.build.json --module commonjs --target es2019 --jsx react-native --outDir dist/commonjs --declaration false', {
    stdio: 'inherit',
    cwd: __dirname
  });
  console.log('✅ CommonJS build complete');
} catch (error) {
  console.error('❌ CommonJS build failed:', error.message);
  process.exit(1);
}

// Build ES Modules
try {
  console.log('Building ES Modules (compatible components only)...');
  execSync('npx tsc --project tsconfig.build.json --module esnext --target es2019 --jsx react-native --outDir dist/module --declaration false', {
    stdio: 'inherit',
    cwd: __dirname
  });
  console.log('✅ ES Module build complete');
} catch (error) {
  console.error('❌ ES Module build failed:', error.message);
  process.exit(1);
}

// Build TypeScript declarations
try {
  console.log('Building TypeScript declarations (compatible components only)...');
  execSync('npx tsc --project tsconfig.build.json --emitDeclarationOnly --declaration --jsx react-native --outDir dist/typescript', {
    stdio: 'inherit',
    cwd: __dirname
  });
  console.log('✅ TypeScript declarations build complete');
} catch (error) {
  console.error('❌ TypeScript declarations build failed:', error.message);
  process.exit(1);
}

console.log('Build complete!');
