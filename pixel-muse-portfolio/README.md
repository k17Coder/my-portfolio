# PIXEL MUSE — Khushi Kaushik | Creative + Technical Portfolio

A responsive React + Vite portfolio that combines a pink pixel-art homepage with professional sections for design concepts, Instagram Reels, AI/ML and research projects, education, certifications, and contact information.

## What's included
- Pink pixel-art studio and interactive navigation.
- **Design Studio** with clearly labeled self-initiated UI/UX, visual identity, and social-content design concepts.
- Three Instagram Reel links supplied by Khushi. Thumbnail artwork is currently decorative placeholder art; replace it with real Reel covers when available.
- AI & Engineering section featuring DeepX and the RAG Evaluation and Hybrid Retrieval System, plus a queue-management project summary clearly marked as user-provided and needing implementation details.
- Education and credentials based on the uploaded resume: Banasthali Vidyapith, expected May 2027, CGPA 8.03/10, five MathWorks certificates, IHCI Pre-Conference and IEEE activity.
- Resume PDF included in `public/Khushi-Kaushik-Resume.pdf` and linked from Contact.
- Responsive layout and reduced-motion styling from the original project.

## Run in VS Code (Windows)
1. Install Node.js LTS from https://nodejs.org if you have not already.
2. Extract this ZIP. Open the **inner** `pixel-muse-portfolio` folder in VS Code (the folder containing `package.json`).
3. Open **Terminal → New Terminal**.
4. Run these commands one at a time:

   ```powershell
   npm install
   npm run dev
   ```

5. Open the `http://localhost:5173/` URL printed by Vite.
6. To stop the development server, click the terminal and press `Ctrl+C`.

If `npm install` appears stuck, check your internet connection and retry. Run commands from the folder that contains `package.json`, not its parent folder.

## Build for deployment

```powershell
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Personal details and links
Open `src/App.jsx` and update the constants near the top if needed: `EMAIL`, `LINKEDIN`, `GITHUB`, `INSTAGRAM`, and `REEL_LINKS`.

## Important portfolio notes
- Design Studio projects are **speculative concepts**, not client commissions or launched products. Replace them with screenshots and details from actual Figma/Canva work as you create or share it.
- Reel cards link to the actual Instagram URLs supplied by Khushi. Current card visuals are placeholders until real covers and Reel descriptions are supplied.
- The resume reports 1,000+ organic views on one Reel; the site does not attribute that metric to a particular Reel.
- The Smart Queue Management System was described in the user's message but is not detailed in the uploaded resume. Add the confirmed stack, role, and outcomes before presenting it as a fully documented case study.
- Confirm all public profile URLs and contact details before publishing.

## Free deployment options
You can import this project into Netlify or Vercel from GitHub. Use `npm run build` as the build command and `dist` as the output directory.
