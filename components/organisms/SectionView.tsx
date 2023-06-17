import { ReactNode } from "react";

export default function SectionView({ children }: { children?: ReactNode }) {
    return (
        <section className="w-[100svw] md:w-[100lvw] min-h-[100svh] md:min-h-[100lvh] border-2 border-red-500 border-dashed flex flex-col">
            {children}
        </section>
    )
}