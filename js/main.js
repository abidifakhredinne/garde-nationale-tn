function envoyerFormulaire() {
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const telephone = document.getElementById('telephone').value;
  const cv = document.getElementById('cv').value;

  const webhookURL = "YOUR_DISCORD_WEBHOOK_URL_HERE"; // غيّرها بالويب هوك متاعك

  const contenu = {
    content: `📋 **طلب تجنيد جديد:**\n👤 الاسم: ${nom} ${prenom}\n📞 الهاتف: ${telephone}\n📄 السيرة الذاتية: ${cv}`
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contenu)
  });

  alert("تم إرسال الطلب بنجاح!");
}
