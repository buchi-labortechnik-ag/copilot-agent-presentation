
export const slidesData = [
  // Slide 1: Title Slide
  {
    type: 'title',
    title: "GitHub Copilot Agent Mode: Your AI Development Partner",
    subtitle: "Revolutionizing the way you code in Visual Studio Code",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", // Replace with actual Copilot/VS Code combined logo if available
  },
  // Slide 2: Introduction
  {
    headline: "Beyond Code Completion: An Intelligent Agent",
    bulletPoints: [
      "Agent Mode is a new, powerful feature in VS Code's GitHub Copilot chat.",
      "It transforms Copilot from a suggestion tool into a more autonomous development assistant.",
      "It can understand and execute multi-step tasks, much like a human developer.",
      "Accessed via the chat sidebar dropdown (Ask, Edit, Agent).",
    ],
    image: "https://code.visualstudio.com/assets/docs/copilot/chat-overview.png", // Replace with actual agent mode screenshot
  },
  // Slide 3: Enabling Agent Mode
  {
    headline: "Unlocking Agent Potential",
    bulletPoints: [
      "Agent Mode is being rolled out gradually.",
      "If not visible, it can be enabled in User Settings:",
      "1. Go to User Settings.",
      "2. Search for \"agent\".",
      "3. Check the box to enable \"GitHub Copilot: Agent Mode\".",
    ],
    image: "https://code.visualstudio.com/assets/updates/1_64/github-copilot.png", // Replace with actual settings screenshot
  },
  // Slide 4: Ask vs. Edit vs. Agent
  {
    headline: "Choosing the Right Interaction",
    columns: [
      {
        title: "Ask Mode",
        points: [
          "Standard chat interaction.",
          "Provides answers and information in the sidebar.",
          "Does not modify files or run commands.",
        ],
      },
      {
        title: "Edit Mode",
        points: [
          "Can create and modify files based on your prompts.",
          "Useful for direct code changes and additions.",
        ],
      },
      {
        title: "Agent Mode",
        points: [
          "Acts more autonomously to complete tasks.",
          "Can run commands (with permission), install dependencies, read project files, and more.",
          "Follows a sequence of steps to achieve a goal.",
        ],
      },
    ],
    image: "https://code.visualstudio.com/assets/blogs/2023/03/22/copilot-chat-inline.png", // Replace with a visual comparison
  },
  // Slide 5: Power of Context
  {
    headline: "Smarter Agent, Better Results",
    bulletPoints: [
      "LLMs have training cutoff dates; they might not know the latest changes in technologies.",
      "Providing context is crucial for accuracy.",
      "Agent Mode can \"read the docs\" using the #fetch tool.",
      "Example: install Tailwind CSS in this project #fetch [URL_to_Tailwind_Astro_Docs] follow the instructions exactly",
      "This allows the agent to use the most up-to-date information.",
    ],
    image: "https://raw.githubusercontent.com/microsoft/vscode-copilot-docs/main/docs/images/fetch-docs.gif", // Replace with conceptual graphic
  },
  // Slide 6: Agent Mode in Action (Tailwind CSS)
  {
    headline: "From Prompt to Working Feature",
    stepByStep: [
      "Prompt: Install Tailwind CSS (with #fetch for docs).",
      "Permission: Agent requests permission to read the webpage.",
      "Command Execution: Agent identifies the correct terminal command (e.g., npx astro add tailwind) and asks for permission to run it. (Smartly skips \"create project\" if one exists).",
      "File Modification: Modifies configuration files (e.g., astro.config.mjs) as per the documentation.",
      "File Creation: Creates necessary files (e.g., global CSS file).",
      "Code Injection: Adds necessary imports/code to existing files (e.g., index.astro).",
      "Dev Server: Offers to start the development server.",
      "Verification: User can then ask the agent to modify a component to use Tailwind classes to confirm installation.",
      "Error Checking: Agent can even check for errors it might have introduced.",
    ],
    keyTakeaway: "Agent Mode handles the entire process, mimicking a developer's workflow.",
    image: "https://code.visualstudio.com/assets/blogs/2023/07/20/copilot-terminal.png", // Replace with flowchart/screenshots
  },
  // Slide 7: Autosave and Rollback
  {
    headline: "Experiment with Confidence",
    bulletPoints: [
      "Changes made by the Agent are often autosaved.",
      "However, these changes are not immediately \"committed\" in a way that's hard to undo.",
      "Users can test the changes and easily roll them back by clicking \"undo\" if needed.",
      "This allows for safe experimentation.",
    ],
    // Consider an image illustrating undo or version history concept
  },
  // Slide 8: Building a Full Application
  {
    headline: "Your Partner for Complex Projects",
    bulletPoints: [
      "Agent Mode can tackle larger tasks, like building an MVP (Minimum Viable Product).",
      "Input for the Agent:",
      "  - Product Requirements Document (PRD): A document detailing user stories and software functionality.",
      "  - Custom Instructions (copilot_instructions.md): Defines best practices, technologies, application name, etc. (Can be AI-generated and tweaked).",
      "  - Database Schema Context: Crucial for data-driven applications.",
    ],
    image: "https://code.visualstudio.com/assets/docs/copilot/explain-this.png", // Replace with icons for PRD, instructions, DB
  },
  // Slide 9: MCP Servers
  {
    headline: "Connecting Copilot to Your World with MCP",
    bulletPoints: [
      "MCP (Model Context Protocol): Solves the problem of giving Copilot context about external systems like databases.",
      "MCP Servers: Small programs running locally that know how to talk to specific services (e.g., a PostgreSQL database).",
      "VS Code talks to these MCP servers via the Model Context Protocol.",
      "Finding MCP Servers: Search online (e.g., mcp.so). Available in various formats (Docker, npm, Python package).",
      "Setup: 1. Install MCP server. 2. In VS Code: Command Palette -> \"MCP: Add Server\". 3. Provide package name, connection string, scope. 4. Start server.",
      "Usage: Provides new tools in the # menu (e.g., #query for databases). Example: what is the schema of my database #query",
    ],
    image: "https://code.visualstudio.com/assets/docs/copilot/workspaces.png", // Replace with MCP diagram
  },
  // Slide 10: The Grand Experiment
  {
    headline: "Agent Mode Takes the Helm",
    bulletPoints: [
      "With PRD, instructions, and database context (via MCP server), the agent was tasked: \"Please build the application defined in this product requirements document.\"",
      "The agent worked for ~30 minutes, creating files, writing code, and structuring the application.",
      "The result: A functional \"URL List\" application with features like creating lists, adding links (with metadata fetching), and reordering.",
    ],
    image: "https://code.visualstudio.com/assets/blogs/2023/11/15/copilot-ga.png", // Replace with screenshot of "URL List" app
  },
  // Slide 11: Next Edit Suggestion
  {
    headline: "Smarter Inline Assistance",
    bulletPoints: [
      "As you make manual edits, Copilot now offers \"Next Edit Suggestions.\"",
      "If a change in one part of the code likely requires a related change elsewhere, a green box will appear with a suggestion.",
      "Users can tab or click to accept the anticipated update.",
    ],
    image: "https://code.visualstudio.com/assets/updates/1_85/copilot-inline-suggestions.png", // Replace with actual feature screenshot
  },
  // Slide 12: Bring Your Own Key (BYOK)
  {
    headline: "More Model Flexibility",
    bulletPoints: [
      "Users can now bring their own API keys for other models.",
      "Accessed via \"Manage Models\" in the Copilot model picker.",
      "Allows use of models like Google's Gemini (e.g., Gemini 2.5 Pro) or local models via Olama.",
    ],
    image: "https://code.visualstudio.com/assets/blogs/2023/11/15/copilot-chat-slash-commands.png", // Replace with Manage Models screenshot
  },
  // Slide 13: Summary & What's Next
  {
    headline: "The Future of AI-Assisted Development",
    keyTakeaway: "Agent Mode: A significant leap, enabling Copilot to handle complex, multi-step development tasks. MCP Servers: Extend Copilot's understanding to your specific environment and data sources. Context is King: Providing clear PRDs, instructions, and access to documentation/data empowers the agent. New Enhancements: Next Edit Suggestions and BYOK further improve the Copilot experience.",
    callToAction: "Explore Agent Mode in your VS Code. Experiment with providing rich context to Copilot. What will you build?",
    image: "https://code.visualstudio.com/assets/home/home-office-showcase.png", // Replace with futuristic coding image
  },
];
