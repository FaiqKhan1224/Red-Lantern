// Remote photography (Unsplash). Replace any of these with your own files,
// e.g. "/images/hero.jpg" placed inside client/public/images/.
const u = (id, w = 1800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const IMG = {
  hero: u('photo-1552566626-52f8b828add9', 2200),
  interior: u('photo-1517248135467-4c7edcad34c4'),
  lanterns: u('photo-1528360983277-13d401cdc186'),
  architecture: u('photo-1508804185872-d7badad00f7d'),
  chef: u('photo-1577219491135-ce391730fb2c', 1200),
  kitchen: u('photo-1556910103-1c02745aae4d', 1400),
  table: u('photo-1414235077428-338989a2e8c0'),
  duck: u('photo-1518983546435-9a2f2b0c4a55', 1400),
  dumplings: u('photo-1563245372-f21724e3856d', 1400),
  prawns: u('photo-1565557623262-b51c2513a641', 1400),
  tea: u('photo-1556679343-c7306c1976bc', 1400),
  private: u('photo-1519167758481-83f550bb49b3', 2000),
};
