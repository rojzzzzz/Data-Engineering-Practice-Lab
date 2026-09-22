from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
DATABASE_DIR = ROOT / "database"
SOURCE_PATH = DATA_DIR / "active_challenge_bank.json"
CHALLENGES_PATH = DATA_DIR / "challenges.json"
VALIDATION_REPORT_PATH = DATA_DIR / "validation_report.json"
DB_PATH = DATABASE_DIR / "practice.db"
IMPORTS_DIR = DATA_DIR / "imports"
VERSIONS_DIR = DATA_DIR / "versions"
