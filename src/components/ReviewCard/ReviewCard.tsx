import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";

interface Place {
    id: number;
    name: string;
    image: string;
    images?: string[];
}

type Props = {
    id: number;
    name: string;
    rate: number; // 0 - 5
    review: string;
    image?: string;
    place: Place;
};

export default function ReviewCard({
    id,
    name,
    rate,
    review,
    image,
    place
}: Props) {
    return (
        <div className="relative bg-white p-4 xl:p-6 rounded-4xl shadow-lg max-w-sm w-75 xl:w-85">

            {/* Avatar */}
            {image && (
                <Link
                    href={`/user/${id}`}
                    className="absolute -top-10 -left-8 w-26 h-26 rounded-full overflow-hidden border-10 border-white">
                    <Image
                        src={image}
                        alt={name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                    />
                </Link>
            )}

            {/* Content */}
            <div className="text-center flex flex-col gap-2">
                <Link href={`/user/${id}`} className="text-lg font-semibold">{name}</Link>

                {/* Stars */}
                <div className="flex gap-1 justify-center">
                    {[...Array(5)].map((_, index) => (
                        <Star
                            key={index}
                            size={18}
                            className={
                                index < rate
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-500"
                            }
                        />
                    ))}
                </div>

                {/* Review */}
                <p className="text-gray-300 text-sm leading-relaxed text-st">
                    {review}
                </p>

                <Link
                    href={`/place/${place.id}`}
                    className="flex items-center gap-1 text-sm text-gray-700 justify-center"
                >
                    {place?.image && (
                        <div className="relative w-6 h-6 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                            <Image
                                src={place.image}
                                alt={place.name || "place"}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    <span className="font-medium truncate max-w-[100px]">
                        {place?.name}
                    </span>
                </Link>
            </div>
        </div>
    );
}