import { google } from "googleapis";

export default async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    // Replace the spreadsheetId with your spreadsheet ID.
    // Replace the range with the tab name.
    // Issues with permissions look at this guide: https://leerob.io/snippets/google-sheets
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "12LLA-NoHin0zQfmpEblgMjd260bmriLMowBAH1QDOhI",
      range: "Designers", // sheet name
    });

    //TODO: Map the collum to object name automatically.
    const rows = response.data.values;
    const db = rows.map((row) => ({
      name: row[0],
      location: row[1],
      expertise: row[2],
      link: row[3],
      approved: row[4],
      featured: row[5],
    }));

    let sanitizeResult = db.filter(
      (item) => item.name != "" && item.approved == "Yes"
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(sanitizeResult));
  } catch (err) {
    console.log(err);
  }
};
