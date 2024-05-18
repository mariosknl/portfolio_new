import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
	return (
		<section id="about">
			<BentoGrid>
				{gridItems.map(
					({
						id,
						title,
						description,
						className,
						imgClassName,
						titleClassName,
						img,
						spareImg,
					}) => (
						<BentoGridItem
							key={id}
							id={id}
							title={title}
							description={description}
							className={className}
							imgClassName={imgClassName}
							titleClassName={titleClassName}
							img={img}
							spareImg={spareImg}
						/>
					)
				)}
			</BentoGrid>
		</section>
	);
};
export default Grid;
