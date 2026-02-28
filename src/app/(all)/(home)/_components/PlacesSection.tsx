import PlaceCard from "@/components/PlaceCard/PlaceCard";

const placesData = [
    {
        id: 1,
        name: "أماما كافيه",
        rating: 5,
        description:
            "مقهى يقدم القهوة المختصة بانواعها شارع سعود الفيصل",
        userCount: 320,
        mainImage: "/amama.jpg",
        images: [
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
        ],
    },
    {
        id: 2,
        name: "بارنز",
        rating: 5,
        description:
            "حيث نقدم أفضل القهوة والمشروبات المتنوعة بأحدث التقنيات، مع خبرة باريستا مميزة ومنتجات مخبوزات شهية",
        userCount: 210,
        mainImage: "/barns.png",
        images: [
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
        ],
    },
    {
        id: 3,
        name: "خطوة جمل",
        rating: 5,
        description:
            "مصنع متخصص بتصنيع القهوة و مستحضراتها من آلات و معدات",
        userCount: 540,
        mainImage: "/camelStep.png",
        images: [
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
            "/girl.jpg",
        ],
    },
    {
        id: 4,
        name: "كيان",
        rating: 5,
        description:
            "كافيه كيان: تجربة قهوة راقية في أجواء تفتح النفس، تجمع بين الذوق الرفيع والاسترخاء لتجربة فريدة من نوعها",
        userCount: 410,
        mainImage: "/kyan.jpg",
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
                    {"الأماكن الشائعة"}
                </h2>

            </div>

            {/* Responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {placesData.map((place, index) => (
                    <PlaceCard key={place.name} place={place} index={index} />
                ))}
            </div>
        </section>
    );
}