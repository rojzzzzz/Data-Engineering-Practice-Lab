
# Data Engineering Practice Lab

A local Streamlit app for practicing data engineering with a supplied JSON challenge bank. It works offline, requires no account or LLM API, and stores answers and progress in a local SQLite database. Prompts can be copied to any LLM for coaching or evaluation.

## Where this came from
Today (September 22nd, 2026) I finished the DataCamp Associate Data Engineer certification. I was really proud and happy about it for like five minutes, and then the next thought was: *okay, how do I not forget all of this in three months?*

## What am I trying to do here?
GPT-6 Luna also happened to launch today, so I figured — I've got a real problem (retention) and a shiny new tool, might as well combine them. The idea is a page that hands me a fresh exercise every day, lets me mess around with different vibecoding approaches, and doubles as a rough gauge of how capable current AI models actually are at this stuff.

## Features

- Four practice modes: Daily Scenario, Complete Case Study, Review Weak Area, and Surprise Me.
- Filters for family, type, difficulty, time, and learning path.
- A student view that only shows student-facing challenge fields — scoring metadata never leaks into the prompts.
- Hints are progressive and opt-in; complications get revealed one at a time, only if you ask.
- Answer drafts autosave, along with saved attempts, completion state, and evaluation results.
- Previewing a challenge doesn't create a progress record — only hitting **Start challenge** does. You can also move started work back to **Not started** without losing your draft.
- Generates both student and evaluation prompts, downloadable as text files.
- A progress dashboard with weak-topic priorities, activity history, and next-challenge suggestions.
- Per-rubric-category scoring with the total calculated automatically.
- Downloadable progress backups, with a merge-based restore.
- Everything lives in SQLite locally — the app itself makes no network calls.


## Project structure

```text
app.py                      Streamlit interface
src/                        Validation, selection, prompting, persistence, statistics
data/final.json             Preserved original source bank
data/deepseek_json_20260922_8e7847.json  Current source bank
data/active_challenge_bank.json  Bank currently used by the app
data/challenges.json        Normalized working bank
data/validation_report.json Validation findings and safe metadata corrections
data/imports/               Uploaded JSON source archives
data/versions/              Previous active-bank snapshots
database/practice.db        Local progress database (created at first run)
tests/                      Pytest suite
```

## Running it on Windows (PowerShell)
 
You'll need Python 3.11 or newer. Open PowerShell in this folder and run:
 
```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
streamlit run app.py
```
 
If PowerShell won't let the venv activate, just call the interpreter directly instead:
 
```powershell
python -m pip install -r requirements.txt
.\.venv\Scripts\streamlit.exe run app.py
```
 
It'll open in your browser, usually at `http://localhost:8501`.
 
## Running it with Docker Compose
 
Make sure Docker Desktop is installed and the engine is actually running, then from this folder:
 
```powershell
docker compose up --build -d
docker compose ps
```
 
Open `http://localhost:8501`. To check logs or shut it down:
 
```powershell
docker compose logs -f practice-lab
docker compose down
```
 
Compose keeps your SQLite progress in a named volume (`practice_data`) and the editable challenge-bank files in another (`challenge_data`), so both survive rebuilds and `docker compose down`. If you actually want to wipe that data, run `docker compose down --volumes`. The challenge volume gets seeded from the files baked into the image on first start.
 
To build the image without Compose:
 
```powershell
docker build -t data-engineering-practice-lab:local .
docker run --rm -p 8501:8501 -v practice_data:/app/database -v challenge_data:/app/data data-engineering-practice-lab:local
```
 
The container runs as a non-root user and ships with a built-in HTTP health check.

## Known limits (v1)
 
- "Evaluation" here just means generating a prompt and letting you enter the result manually — the app itself doesn't call an LLM.
- Attempts and notes are stored locally, unencrypted.
- Topic analysis is only as good as the evaluation tags you record, and it's pretty thin with small sample sizes.
- The bundled bank is short one challenge relative to what it claims — see the validation report for details.

## P.S

This whole thing was supposed to be kept as a personal tool (That is the reason why everything is hardcoded and centered in Data Engineering) but I'm so happy with it that I decided to upload it to Github. If you are reading this probably you find it useful as well, so I hope it can help you as much as I hope it's going to help me. If come across any idea to improve it, discussions will be open, so feel free to reach out! 