import { notFound } from 'next/navigation'

// Неизвестный путь внутри локали показывает локализованную 404.
export default function CatchAllPage() {
	notFound()
}
