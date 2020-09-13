exports.GetAllArticle = (req, res, next) => {
  console.log("ada error");
  res.status(200).json({
    data: [
      { name: "article 1" },
      { name: "article 2" },
      { name: "article 3" },
      { name: "article 5" },
    ],
    metaData: {
      pagination: {
        count: 4,
        page: 1,
        nextPage: true,
        prevPage: false,
      },
    },
  });
};

exports.GetDetailArticle = (req, res, next) => {
  res.status(200).json({
    data: {
      name: `article ${req.params.id}`,
    },
    metaData: {},
  });
};
