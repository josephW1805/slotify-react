const AlbumPage = ({ params }: { params: { slug: string } }) => {
  return <div>Album: {params.slug}</div>;
};

export default AlbumPage;
