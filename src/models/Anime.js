export default class Anime {
  constructor(id, title, genre, imageUrl, synopsis, rating, vidioUrl) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.imageUrl = imageUrl;
    this.synopsis = synopsis;
    this.rating = rating;
    this.vidioUrl = vidioUrl;
  }

  static fromApiData(apiData) {
    return new Anime(
      apiData.id,
      apiData.title,
      apiData.genre,
      apiData.imageUrl,
      apiData.synopsis,
      apiData.rating,
      apiData.vidioUrl
    );
  }
}
