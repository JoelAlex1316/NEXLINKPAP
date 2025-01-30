document.querySelector('.save-contact').addEventListener('click', () => {
    alert('Contact saved to your device!');
});

document.getElementById("saveContact").addEventListener("click", () => {
    // Contact information
    const contactInfo = {
        name: "Yohanes Fekadu",
        company: "NEXGEN TECHNOLOGIES",
        address: "Addis Ababa, Ethiopia",
        phone: "+251932184139",
        email: "taffajonny@gmail.com",
        website: "https://www.nexgentechnologieset.com"
    };

    // Generate vCard content
    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.company}
ADR;TYPE=WORK,PREF:;;${contactInfo.address}
TEL;TYPE=CELL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
END:VCARD`;

    // Create a blob for the vCard file
    const blob = new Blob([vCard], { type: "text/vcard" });

    // Create a link element to download the file
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${contactInfo.name.replace(/\s+/g, "_")}_Contact.vcf`;
    a.click();
});
