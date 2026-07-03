# Rules

- **Save Command Shortcut**: If the user inputs the command `/` (or asks to save progress), the agent must immediately:
  1. Compile/build the project using `npm run build` to verify there are no compilation errors.
  2. Stage all modifications in Git using `git add .`.
  3. Commit the changes with a descriptive, human-readable commit message based on the edits made.
  4. Inform the user of the successful build, files committed, and current server status.
