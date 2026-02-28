import PlaceCard from "@/components/PlaceCard/PlaceCard";

const placesData = [
    {
        id: 1,
        name: "Chef's Restaurant",
        rating: 4.8,
        description:
            "An exceptional dining experience with a warm atmosphere and premium service.",
        userCount: 320,
        duration: "3 years ago",
        mainImage: "/girl.jpg",
        images: [
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
        ],
    },
    {
        id: 2,
        name: "Blue Lagoon Cafe",
        rating: 4.6,
        description:
            "A cozy cafe perfect for studying, meetings, and relaxing evenings.",
        userCount: 210,
        duration: "2 years ago",
        mainImage: "/girl.jpg",
        images: [
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
        ],
    },
    {
        id: 3,
        name: "Urban Fitness Club",
        rating: 4.9,
        description:
            "Modern gym facilities with professional trainers and advanced equipment.",
        userCount: 540,
        duration: "5 years ago",
        mainImage: "/girl.jpg",
        images: [
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
        ],
    },
    {
        id: 4,
        name: "Silver Screen Cinema",
        rating: 4.7,
        description:
            "Premium movie theater with the latest films, luxury seats, and gourmet snacks.",
        userCount: 410,
        duration: "4 years ago",
        mainImage: "/girl.jpg",
        images: [
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
        ],
    },
];


// Main section component
export default function PlacesSection() {
    return (
        <section className="container mx-auto py-12 px-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Popular Places
                </h2>

            </div>

            {/* Responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {placesData.map((place, index) => (
                    <PlaceCard key={place.name} place={place} index={index} />
                ))}
            </div>
        </section>
    );
}