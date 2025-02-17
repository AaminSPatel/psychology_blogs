export async function POST(request) {
  const formData = await request.json();
  console.log("Form Data Received:", formData);

  // Simulate saving data to a database or sending an email
  return new Response(JSON.stringify({ message: "Form submitted successfully!" },formData), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function GET() {
  const imageData = {
    src: "/team.jpg",
    alt: "Our Team",
    width: 800,
    height: 600,
  };
  return new Response(JSON.stringify(imageData), {
    headers: { "Content-Type": "application/json" },
  });
}
