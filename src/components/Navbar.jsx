import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, User, ChevronDown, X, Menu } from "lucide-react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const NAV_LINKS = ["Home", "New", "About", "Blog", "Contact"];
const SHOP_ITEMS = ["Men", "Women", "Accessories"];
const SOCIAL = [
  { Icon: FaTwitter, title: "Twitter" },
  { Icon: FaFacebookF, title: "Facebook" },
  { Icon: FaPinterestP, title: "Pinterest" },
  { Icon: FaInstagram, title: "Instagram" },
];

const gold = "#c9a96e";
const cream = "#f5f0e8";
const dark = "#0d0b09";

const iconBtn = {
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "rgba(245,240,232,0.5)",
  display: "flex",
  alignItems: "center",
  padding: "4px",
  transition: "color 0.2s",
};

const linkBase = {
  fontFamily: "'Tenor Sans', sans-serif",
  fontSize: "9px",
  letterSpacing: "2.5px",
  textTransform: "uppercase",
  color: "rgba(245,240,232,0.5)",
  textDecoration: "none",
  display: "block",
  transition: "color 0.2s, padding-left 0.2s",
};

export default function Navbar() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);

  return (
    <header
      style={{
        background: dark,
        borderBottom: `0.5px solid rgba(201,169,110,0.2)`,
        position: "sticky",
        top: 0,
        zIndex: 50,
        fontFamily: "'Tenor Sans', sans-serif",
      }}
    >
      {/* ── Announcement Banner ── */}
      <div
        style={{
          background: gold,
          textAlign: "center",
          padding: "7px 16px",
          fontSize: "8px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: dark,
        }}
      >
        Sign up for exclusive member discounts &amp; early access
      </div>

      {/* ── Main Row ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
          position: "relative",
        }}
      >
        {/* Left: Search */}
        <motion.button
          whileHover={{ color: gold }}
          style={iconBtn}
          onClick={() => setSearchOpen(true)}
          aria-label="Search"
        >
          <Search size={18} strokeWidth={1.5} />
        </motion.button>

        {/* Center: Logo */}
        <div style={{ textAlign: "center", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(16px, 4vw, 28px)",
              letterSpacing: "clamp(3px, 1vw, 8px)",
              color: cream,
              textTransform: "uppercase",
              lineHeight: 1,
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            Claire Riche
          </motion.h1>
          <p
            style={{
              fontFamily: "'Tenor Sans', sans-serif",
              fontSize: "clamp(6px, 1.5vw, 8px)",
              letterSpacing: "clamp(2px, 1vw, 5px)",
              color: gold,
              textTransform: "uppercase",
              marginTop: "4px",
              marginBottom: 0,
              whiteSpace: "nowrap",
            }}
          >
            Fashion &amp; More
          </p>
        </div>

        {/* Right icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Socials — desktop only */}
          <div
            className="hidden md:flex"
            style={{
              alignItems: "center",
              gap: "12px",
              paddingRight: "12px",
              borderRight: `0.5px solid rgba(201,169,110,0.2)`,
            }}
          >
            {SOCIAL.map(({ Icon, title }, i) => (
              <motion.div
                key={i}
                title={title}
                whileHover={{ scale: 1.15 }}
                style={{ color: "rgba(245,240,232,0.35)", cursor: "pointer", fontSize: "12px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.35)")}
              >
                <Icon />
              </motion.div>
            ))}
          </div>

          {/* Cart */}
          <motion.button
            whileHover={{ color: gold }}
            style={{ ...iconBtn, position: "relative" }}
            aria-label="Shopping bag"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: gold,
                color: dark,
                fontSize: "7px",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              2
            </span>
          </motion.button>

          {/* Account — desktop only */}
          <div className="hidden md:block" style={{ position: "relative" }}>
            <motion.button
              whileHover={{ color: gold }}
              style={iconBtn}
              onClick={() => setProfileOpen(!profileOpen)}
              aria-label="Account"
            >
              <User size={18} strokeWidth={1.5} />
            </motion.button>

            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "36px",
                    background: "#1a1612",
                    border: `0.5px solid rgba(201,169,110,0.25)`,
                    width: "160px",
                    zIndex: 60,
                    overflow: "hidden",
                  }}
                >
                  {["My Account", "Orders", "Logout"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      style={{ ...linkBase, padding: "12px 16px", borderBottom: `0.5px solid rgba(245,240,232,0.06)` }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
                    >
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileHover={{ color: gold }}
            style={iconBtn}
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={1.5} />
          </motion.button>
        </div>
      </div>

      {/* ── Desktop Bottom Nav ── */}
      <nav
        className="hidden md:flex"
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "12px 48px",
          borderTop: `0.5px solid rgba(245,240,232,0.06)`,
        }}
      >
        {NAV_LINKS.map((link) => (
          <div key={link} style={{ display: "flex", alignItems: "center" }}>
            <a
              href="#"
              style={{
                fontFamily: "'Tenor Sans', sans-serif",
                fontSize: "10px",
                letterSpacing: "3.5px",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.5)",
                textDecoration: "none",
                transition: "color 0.2s",
                padding: "0 20px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
            >
              {link}
            </a>
            <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(201,169,110,0.3)", flexShrink: 0 }} />
          </div>
        ))}

        {/* Shop dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setIsShopOpen(true)}
          onMouseLeave={() => setIsShopOpen(false)}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontFamily: "'Tenor Sans', sans-serif",
              fontSize: "10px",
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              color: isShopOpen ? cream : "rgba(245,240,232,0.5)",
              cursor: "pointer",
              padding: "0 20px",
              transition: "color 0.2s",
            }}
          >
            Shop
            <motion.span animate={{ rotate: isShopOpen ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ display: "flex" }}>
              <ChevronDown size={12} strokeWidth={1.5} />
            </motion.span>
          </div>

          <AnimatePresence>
            {isShopOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  top: "28px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#1a1612",
                  border: `0.5px solid rgba(201,169,110,0.25)`,
                  width: "160px",
                  zIndex: 60,
                }}
              >
                {SHOP_ITEMS.map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{ ...linkBase, padding: "12px 20px", borderBottom: `0.5px solid rgba(245,240,232,0.06)` }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = gold; e.currentTarget.style.paddingLeft = "28px"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(245,240,232,0.5)"; e.currentTarget.style.paddingLeft = "20px"; }}
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* ── Mobile Slide-in Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 40 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 22 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "80%",
                maxWidth: "320px",
                height: "100%",
                background: "#110f0c",
                borderLeft: `0.5px solid rgba(201,169,110,0.2)`,
                zIndex: 50,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "18px", letterSpacing: "4px", color: cream }}>
                  Menu
                </span>
                <button style={iconBtn} onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {NAV_LINKS.map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    style={{
                      fontFamily: "'Tenor Sans', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      color: "rgba(245,240,232,0.45)",
                      textDecoration: "none",
                      padding: "16px 0",
                      borderBottom: `0.5px solid rgba(245,240,232,0.06)`,
                      display: "block",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.45)")}
                  >
                    {item}
                  </motion.a>
                ))}

                {/* Mobile Shop accordion */}
                <div>
                  <button
                    onClick={() => setMobileShopOpen(!mobileShopOpen)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      borderBottom: `0.5px solid rgba(245,240,232,0.06)`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 0",
                      fontFamily: "'Tenor Sans', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      color: "rgba(245,240,232,0.45)",
                      cursor: "pointer",
                    }}
                  >
                    Shop
                    <motion.span animate={{ rotate: mobileShopOpen ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", color: gold }}>
                      <ChevronDown size={14} strokeWidth={1.5} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {mobileShopOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: "hidden" }}
                      >
                        {SHOP_ITEMS.map((item) => (
                          <a
                            key={item}
                            href="#"
                            style={{ ...linkBase, padding: "12px 0 12px 20px", fontSize: "10px", borderBottom: `0.5px solid rgba(245,240,232,0.04)` }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {["My Account", "Orders", "Logout"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{ ...linkBase, padding: "16px 0", borderBottom: `0.5px solid rgba(245,240,232,0.06)`, fontSize: "11px", letterSpacing: "4px" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div style={{ marginTop: "auto", paddingTop: "28px", borderTop: `0.5px solid rgba(245,240,232,0.06)`, display: "flex", gap: "20px" }}>
                {SOCIAL.map(({ Icon, title }, i) => (
                  <div
                    key={i}
                    title={title}
                    style={{ color: "rgba(245,240,232,0.3)", cursor: "pointer", fontSize: "14px", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.3)")}
                  >
                    <Icon />
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Search Overlay ── */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              style={{ position: "fixed", inset: 0, background: dark, zIndex: 40 }}
              onClick={() => setSearchOpen(false)}
            />
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.35, type: "spring" }}
              style={{
                position: "fixed",
                top: "70px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "min(600px, 92vw)",
                background: "#1a1612",
                border: `0.5px solid rgba(201,169,110,0.3)`,
                zIndex: 50,
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <Search size={16} strokeWidth={1.5} color={gold} />
              <input
                autoFocus
                type="text"
                placeholder="Search the collection..."
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  outline: "none",
                  fontFamily: "'Tenor Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  color: cream,
                  caretColor: gold,
                }}
              />
              <button style={iconBtn} onClick={() => setSearchOpen(false)} aria-label="Close search">
                <X size={16} strokeWidth={1.5} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
