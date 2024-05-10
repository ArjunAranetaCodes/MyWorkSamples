const fs = require('fs');
const PDFDocument = require('pdfkit');

// Create a new PDF document
const doc = new PDFDocument();

// Set up the PDF document metadata
doc.info.Title = 'Commercial Invoice';
doc.info.Author = 'Arjun Araneta';

// Create a writable stream to write the PDF data
const stream = doc.pipe(fs.createWriteStream('form.pdf'));

const heading = 'Commercial Invoice';
const pageWidth = doc.page.width;
const textWidth = doc.widthOfString(heading);
// Add a heading to the PDF
const xCoordinate = (pageWidth - textWidth) / 2;

// Add the centered heading
doc.fontSize(18).text(heading, xCoordinate, 50);

// Draw a rectangle for the form group
doc.rect(40, 80, 350, 280).stroke();

//Group Name
doc.fontSize(18).text('Sender Details', 50, 100);

// Add form elements
doc.fontSize(12);

doc.text('Company:', 50, 130);
doc.rect(150, 125, 200, 20).stroke();

doc.text('Address Line 1:', 50, 160);
doc.rect(150, 155, 200, 20).stroke();

doc.text('Address Line 2:', 50, 190);
doc.rect(150, 185, 200, 20).stroke();

doc.text('City:', 50, 220);
doc.rect(150, 215, 200, 20).stroke();

doc.text('Postcode:', 50, 250);
doc.rect(150, 245, 200, 20).stroke();

doc.text('Sender Name:', 50, 280);
doc.rect(150, 275, 200, 20).stroke();

doc.text('Telephone/Email:', 50, 310);
doc.rect(150, 305, 200, 20).stroke();

// End the PDF document
doc.end();

// Handle the 'finish' event when the PDF is generated
stream.on('finish', () => {
  console.log('PDF generated successfully!');
});