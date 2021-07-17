const GoogleSpreadsheet = require("google-spreadsheet");
const { promisify } = require("util");
const creds = require("../etc/google_sheets_client_secret.json");

async function accessSpreadsheet() {
  const doc = new GoogleSpreadsheet(
    "1iWguDwX3ANg8Bym8iDUOhJs8pxdvavYCbbvEVKYNZ1k"
  );
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheet[0];
  console.log("Title: ${sheet.title}, Rows: ${sheet.rowCount}");
}

accessSpreadsheet();
