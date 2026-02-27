import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";

type Props = {
    name: string;
    rate: number; // 0 - 5
    review: string;
    image?: string;
};

export default function ReviewCard({
    name,
    rate,
    review,
    image,
}: Props) {
    return (
        <div className="relative bg-white p-4 xl:p-6 rounded-4xl shadow-lg max-w-sm w-75 xl:w-85">

            {/* Avatar */}
            {image && (
                <div className="absolute -top-10 -left-8 w-26 h-26 rounded-full overflow-hidden border-10 border-white">
                    <Image
                        src={image}
                        alt={name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Content */}
            <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>

                {/* Stars */}
                <div className="flex gap-1 mb-4 justify-center">
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
                <p className="text-gray-300 text-sm leading-relaxed">
                    {review}
                </p>
            </div>
        </div>
    );
}