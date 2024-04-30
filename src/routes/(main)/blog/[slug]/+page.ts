import { error } from '@sveltejs/kit';

type Load = {
	params: {
		slug: string;
	};
};
export async function load({ params }: Load) {
	try {
		const post: any = await import(`../../../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}