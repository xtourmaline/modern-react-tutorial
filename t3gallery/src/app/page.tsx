import Link from "next/link";
import Image from 'next/image'

const mockUrls = [
  "https://rad0fe6bke.ufs.sh/f/iV4qqqZQGaz7G9ANDEJA2EovO1HBin8WmXUZhzY35fp6q7gN", "https://rad0fe6bke.ufs.sh/f/iV4qqqZQGaz7BBWIsxaYw0st8xoi9VafdGJZ6l7eqnKN24OL", "https://rad0fe6bke.ufs.sh/f/iV4qqqZQGaz7Q5mr86BBwFpGAf2ziLKy9NXJVhYc0lkrIMeq", "https://rad0fe6bke.ufs.sh/f/iV4qqqZQGaz7JXDecy0tq5Fr6CvAMlnQechyNHXIaujBJk9w"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image"/>
          </div>
        ))}
      </div>
    </main>
  );
}
