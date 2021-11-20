import * as shell from 'shelljs'

// Cpia todos los views a build
shell.cp("-R", "src/views", "build/")