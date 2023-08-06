import { ReactNode } from 'react';

type Size = 'small' | 'medium' | 'large'
interface Props {
	title?: string;
	subtitle?: string;
	footer?: ReactNode;
	size?: Size;
	className?: string;
	children?: ReactNode;
}

export const Card = ({ title, subtitle, footer, size, className, children }: Props) => {
	const sizeClasses = (size: Size) => {
		if (size === 'small') {
			return 'w-[180px] px-1'
		}
		if (size === 'large') {
			return 'w-[250px] px-4'
		}
		return 'w-[230px] px-2'
	}
	
	const baseCardClasses = 'flex flex-col gap-2 border-solid border rounded-xl'
	return (
		<div className={[className, baseCardClasses, sizeClasses(size)].join(' ')}>
			<div className="w-full flex flex-col">
				<span className="font-bold text-white">{title}</span>
				<span className="font-normal text-white">{subtitle}</span>
			</div>
			<div className="w-full flex">
				{children}
			</div>
			{footer && (
				<div className="w=full flex">
					{footer}
				</div>
			)}
		</div>
	)
}
