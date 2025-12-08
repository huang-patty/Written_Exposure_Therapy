import connectToDatabase from './db.js';
import Subscriber from './models/Subscriber.js';

export default async function handler(req, res) {
  // 1. Security Check
  // We look for the password in the URL (e.g. ?secret=MyPassword)
  const { secret } = req.query;

  if (secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ message: 'Unauthorized: Wrong secret key' });
  }

  try {
    // 2. Connect to DB
    await connectToDatabase();

    // 3. Get all subscribers
    const subscribers = await Subscriber.find({}).sort({ subscribedAt: -1 });

    // 4. Convert to CSV format (Excel readable)
    // Header row
    let csvContent = "Email,Date Subscribed\n";
    
    // Data rows
    subscribers.forEach(sub => {
      // Format date to be readable
      const date = new Date(sub.subscribedAt).toLocaleDateString();
      csvContent += `${sub.email},${date}\n`;
    });

    // 5. Send file to browser
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=subscribers.csv');
    res.status(200).send(csvContent);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error exporting data' });
  }
}