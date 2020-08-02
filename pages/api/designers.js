import drive from "drive-db";

export default async (req, res) => {
  const db = await drive("12LLA-NoHin0zQfmpEblgMjd260bmriLMowBAH1QDOhI");
  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.show == "Yes"
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sanitizeResult));
};
