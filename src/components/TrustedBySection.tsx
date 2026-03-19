"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
    { name: 'Association of Grassroot Journalists of Kenya', logo: '/agjk.png' },
    { name: 'Kenya Environment and Science Journalist Association', logo: '/kesja.png' },
    { name: 'Living Health Focus Africa', logo: '/lhfa.png' },
    { name: 'Mucoll Ltd', logo: '/mucoll.png' },
    { name: 'Osil Limited', logo: '/osil.png' },
    { name: 'Rural Family Hope', logo: '/rfh.png' },
    { name: 'Charming Safaris', logo: '/charming-safaris.png' },
    { name: 'Poa Palace', logo: '/poa-palace.png' },
    { name: 'Kenya SRHR Alliance', logo: '/ksrhra.png' }
];

export const TrustedBySection = () => {
    return (
        <section className="py-24 bg-background">
            <div className="w-full px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Trusted by Organizations Across Kenya
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                        We partner with diverse businesses and NGOs to strengthen financial systems and ensure compliance
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-card p-6 rounded-xl border border-border-soft flex items-center justify-center text-center h-32 hover:border-secondary transition-colors"
                        >
                            <div className="relative w-full h-20 invert">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
