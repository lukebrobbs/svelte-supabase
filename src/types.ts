export interface Event {
	id: number;
	name: string;
	date: string;
	artist: Artist;
	cover_img_url: string;
}

export interface Artist {
	name: string;
}
