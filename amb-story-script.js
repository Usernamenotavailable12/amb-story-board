        const allStories = [
    {
      id: 0,
      author: "Ambassadori League",
      imageUrl: "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/ddfdf389-9a71-432c-897f-18ad5e02ac24/Ambasadori%20League%20Mobile.png?auto=format%2Ccompress",
    },
  
    {
      id: 1,
      author: "Kvara Reactoonz",
      imageUrl: "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/1af8c4d3-46d1-4587-9748-199c28e20526/Mobile%20Banner%202.png?auto=format%2Ccompress",
    },
  
    {
      id: 2,
      author: "Hacksaw Gaming",
      imageUrl: "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/132da97b-c788-4255-b542-e253be298998/Hacksaw-Mobile-Banner.jpg?auto=format%2Ccompress",
    },
  
    {
      id: 3,
      author: "Kvara's Weekend",
      imageUrl: "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/5c38626a-f022-459e-a7d8-27f174c12f1a/Kvara%20Placeholder%20Mobile.png?auto=format%2Ccompress",
    },
  
    {
      id: 4,
      author: "Napoli Vs Real Madrid",
      imageUrl: "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/ce7884e3-6653-4db8-b9c3-17bfc1f7b4c6/Kvara%20MOBILE%20EN%202.png?auto=format%2Ccompress",
    },
  
    {
      id: 5,
      author: "Happy Hour Promotion",
      imageUrl: "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/0906d509-1752-4b9a-ad2b-1ecebf4de1ea/Tournaments%20Mobile%20Banner%20Happy%20Hour%201.png?auto=format%2Ccompress",
    },
  
    {
      id: 6,
      author: "Free Spins",
      imageUrl: "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/1140778d-385b-4668-a1df-a6b09ee290a4/Offers%20Page%20MOBILE%202.png?auto=format%2Ccompress",
    },
  
    {
      id: 7,
      author: "Double Deposit",
      imageUrl: "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/aceb45c4-4923-485e-aadf-1bbc92be1658/double-Mobile-Banner-en.jpg?auto=format%2Ccompress",
    },
  
    {
      id: 8,
      author: "Leaderboards",
      imageUrl: "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/335ae4c1-cc60-4ca8-9626-8545362d483c/Mobile-Banner-tournaments.jpg?auto=format%2Ccompress",
    },
  
    {
      id: 9,
      author: "Cash Back",
      imageUrl: "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/fc567f4f-acc7-450b-9562-b9443ce0c50a/cashback-Mobile-Banner.jpg?auto=format%2Ccompress",
    },
  ];
  
  const stories = document.querySelector(".stories");
  const storiesFullView = document.querySelector(".stories-full-view");
  const closeBtn = document.querySelector(".close-btn");
  const storyImageFull = document.querySelector(".stories-full-view .story img");
  const storyAuthorFull = document.querySelector(
    ".stories-full-view .story .author"
  );
  const nextBtn = document.querySelector(".stories-container .next-btn");
  const previousBtn = document.querySelector(".stories-container .previous-btn");
  const storiesContent = document.querySelector(".stories-container .content");
  const nextBtnFull = document.querySelector(".stories-full-view .next-btn");
  const previousBtnFull = document.querySelector(
    ".stories-full-view .previous-btn"
  );
  
  let currentActive = 0;
  
  const createStories = () => {
    allStories.forEach((s, i) => {
      const story = document.createElement("div");
      story.classList.add("story");
      const img = document.createElement("img");
      img.src = s.imageUrl;
      const author = document.createElement("div");
      author.classList.add("author");
      author.innerHTML = s.author;
  
      story.appendChild(img);
      story.appendChild(author);
  
      stories.appendChild(story);
  
      story.addEventListener("click", () => {
        showFullView(i);
      });
    });
  };
  
  createStories();
  
  const showFullView = (index) => {
    currentActive = index;
    updateFullView();
    storiesFullView.classList.add("active");
  };
  
  closeBtn.addEventListener("click", () => {
    storiesFullView.classList.remove("active");
  });
  
  const updateFullView = () => {
    storyImageFull.src = allStories[currentActive].imageUrl;
    storyAuthorFull.innerHTML = allStories[currentActive].author;
  };
  
  nextBtn.addEventListener("click", () => {
    storiesContent.scrollLeft += 300;
  });
  
  previousBtn.addEventListener("click", () => {
    storiesContent.scrollLeft -= 300;
  });
  
  storiesContent.addEventListener("scroll", () => {
    if (storiesContent.scrollLeft <= 24) {
      previousBtn.classList.remove("active");
    } else {
      previousBtn.classList.add("active");
    }
  
    let maxScrollValue =
      storiesContent.scrollWidth - storiesContent.clientWidth - 24;
  
    if (storiesContent.scrollLeft >= maxScrollValue) {
      nextBtn.classList.remove("active");
    } else {
      nextBtn.classList.add("active");
    }
  });
  
  nextBtnFull.addEventListener("click", () => {
    if (currentActive >= allStories.length - 1) {
      return;
    }
    currentActive++;
    updateFullView();
  });
  
  previousBtnFull.addEventListener("click", () => {
    if (currentActive <= 0) {
      return;
    }
    currentActive--;
    updateFullView();
  });
  
