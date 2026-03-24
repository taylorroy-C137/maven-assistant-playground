# Maven Consumer Playground

A playground for viewing and building Maven prototypes — Consumer screens, Maven Assistant conversations, and more.

**Live site (view only):** [maven-assistant-playground.vercel.app](https://maven-assistant-playground.vercel.app)

---

## Prerequisites (one-time installs)

You need two apps on your Mac. If you already have them, skip ahead.

### 1. Install Cursor

Cursor is a code editor with built-in AI. You'll use it to create and edit prototypes by typing plain-English instructions.

1. Go to [cursor.com](https://www.cursor.com/)
2. Click **Download**
3. Open the downloaded file and drag **Cursor** into your **Applications** folder
4. Open Cursor from your Applications folder

### 2. Install Node.js

Node.js runs the playground on your computer.

1. Go to [nodejs.org](https://nodejs.org/)
2. Click the **LTS** download button (the one on the left)
3. Open the downloaded file and follow the installer — click **Continue** through each step
4. When it says "Installation Complete," you're done

---

## First-time setup (5 minutes)

You only need to do this once.

### 1. Open the terminal in Cursor

The terminal is a small text window at the bottom of Cursor where you type commands.

- Open Cursor
- Go to the menu bar: **View → Terminal** (or press **Ctrl + `** on your keyboard — that's the backtick key, above Tab)

A panel will appear at the bottom of the window.

### 2. Clone the project

"Cloning" downloads a copy of the project to your computer. In the terminal, paste this command and press **Enter**:

```
git clone https://github.com/taylorroy-C137/maven-assistant-playground.git
```

### 3. Open the project folder

In Cursor, go to **File → Open Folder**, navigate to your home folder, and open the **maven-assistant-playground** folder.

Alternatively, type this in the terminal and press Enter:

```
cd maven-assistant-playground
```

### 4. Install dependencies

This downloads the libraries the project needs. In the terminal, paste and press Enter:

```
npm install
```

Wait for it to finish (about 30 seconds). You'll see the cursor blinking on a new line when it's done.

---

## Run the playground

Every time you want to work on prototypes, run this command in the terminal:

```
npm run dev
```

Then open your web browser (Chrome works best) and go to:

```
http://localhost:3000
```

You'll be asked for a password. Enter it and you'll see the prototype gallery — a list of every prototype organized by date.

> **To stop the server**, click in the terminal and press **Ctrl + C**.

---

## Create your first prototype

1. On the gallery page, click the **New** button in the top-right corner
2. Fill in the fields:
   - **Name** — give it a short name (e.g. "My Home Screen")
   - **Description** — optional, describe what you're exploring
   - **Designer** — select your name from the dropdown
   - **Template** — pick a starting point:
     - *Blank* — empty screen, start from scratch
     - *Consumer Home* — home screen with task cards, carousels, and support section
     - *Consumer Care* — care screen with appointments and GLP-1 support
     - *Consumer Rx* — prescriptions screen with list and detail views
     - *Default Maven Assistant* — chat conversation prototype
3. Click **Create**
4. Click **Open in Cursor** — this takes you directly to your prototype files

You now have two files in your prototype folder:

| File | What it does |
|------|-------------|
| `metadata.json` | Title, description, and label that appear in the gallery |
| `page.tsx` | The actual screen — this is what you'll edit |

---

## Edit your prototype with AI

This is the best part. You don't need to know how to code. Just talk to Cursor's AI.

1. Open your `page.tsx` file in Cursor
2. Press **Cmd + I** (or click the chat icon) to open the AI prompt
3. Type what you want in plain English, for example:
   - *"Change the welcome name from Kate to Sarah"*
   - *"Add a new section called My Progress with a progress bar at 60%"*
   - *"Remove the support cards at the bottom"*
   - *"Change the heading to say Your Care Plan"*
4. The AI will make the changes for you
5. Save the file (**Cmd + S**) and your browser refreshes automatically

The AI already knows the Maven design system — it will use the correct colors, fonts, and components.

---

## View your prototype

With the server running (`npm run dev`), your prototype is always at:

```
http://localhost:3000/your-name/your-prototype-slug
```

For example, if your name is "shweta" and you named your prototype "My Home Screen," the URL would be:

```
http://localhost:3000/shweta/my-home-screen
```

You can also find it in the gallery at `http://localhost:3000`.

---

## Share your work

When your prototype is ready for others to see on the live site, ask Taylor to deploy it. You can also push it yourself:

1. In the terminal, run these three commands one at a time:

```
git add .
```

```
git commit -m "Add my prototype"
```

```
git push
```

The live site will update automatically in about a minute.

---

## Quick reference

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start the playground on your computer |
| `npm install` | Install/update dependencies (run after pulling changes) |
| **Ctrl + C** | Stop the server |
| **Cmd + I** | Open AI prompt in Cursor |
| **Cmd + S** | Save your file |

| URL | What it is |
|-----|-----------|
| `http://localhost:3000` | Your local playground |
| [maven-assistant-playground.vercel.app](https://maven-assistant-playground.vercel.app) | Live site (everyone can view) |

---

## Troubleshooting

**"command not found: npm"** — Node.js isn't installed yet. Go back to the Prerequisites section.

**"command not found: git"** — Open Cursor and it should prompt you to install developer tools. Click Install, then try again.

**The browser shows a blank page** — Make sure `npm run dev` is still running in the terminal. If it stopped, run it again.

**Password not accepted** — Make sure you're typing the password exactly, including any special characters.

**My changes aren't showing up** — Save the file (Cmd + S). If that doesn't help, refresh the browser page.
