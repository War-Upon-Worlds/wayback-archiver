Wayback Archiver (Chrome Extension)

A manual-first, user-controlled Chrome extension for archiving websites to the Wayback Machine. Built for OSINT workflows and researchers who want precision, not noise.

✨ Features

☑ Auto-archive toggle (on/off)

☑ Confirmation prompt: Yes/No before archiving

☑ Blocklist for sensitive/private domains (e.g., Google, Facebook, banks)

☑ Local archive history with timestamp

☑ View archive log inside the popup

☑ Export logs as .json

☑ Minimal permissions and no background archiving noise

🚀 Installation (Developer Mode)

Download or clone this repo

Open Chrome and go to chrome://extensions/

Enable Developer Mode (top right)

Click Load unpacked

Select the waybackautosave folder

Pin the extension to your toolbar (optional)

⚙ Usage

Toggle "Auto-Archive Enabled" via the popup UI

If enabled, each site visit will trigger a small popup asking: "Archive this page?"

Archived pages are submitted to: https://web.archive.org/save/{current_url}

Log history is stored locally and viewable in the extension popup

Download a .json export of your log anytime

⛔ OPSEC & Safety Notes

This tool is OPSEC-aware:

No automatic archiving of blacklisted domains

Confirmation prevents accidental logging of sensitive activity

Archiving is manual-first by design

Planned/Optional Future Features

Archive via logged-in Wayback account

Screenshot or MHTML local snapshots

Schedule future re-archives

Submit to multiple services (e.g., Archive.today)

Export CSV

🙏 Feedback Welcome

I'm not a pro coder — just someone who needed this. AI helped me put it together, but the ideas and structure are mine. I’d love suggestions, forks, contributions, or constructive feedback.

Reddit: r/OSINT | r/chrome_extensions

DM or tag me if you try it!

📚 License

MIT License. Free to use, modify, share.

✨ If something feels stiff or too polished, it's probably AI-generated wording. This was crafted with help, but led by curiosity.