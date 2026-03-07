import React from "react";
import { 
  Box, 
  Typography, 
  IconButton, 
  Grid, 
  Container, 
  Link, 
  Divider,
  TextField,
  Button,
  Stack
} from "@mui/material";
import { 
  Facebook, 
  Twitter, 
  YouTube, 
  Instagram, 
  Phone, 
  Email, 
  LocationOn,
  Send
} from "@mui/icons-material";
import logo from "../assets/logo_carHero.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const socialIcons = [
    { Icon: Facebook, label: "Facebook", color: "#1877F2" },
    { Icon: Twitter, label: "Twitter", color: "#1DA1F2" },
    { Icon: Instagram, label: "Instagram", color: "#E4405F" },
    { Icon: YouTube, label: "YouTube", color: "#FF0000" },
  ];

  const serviceLinks = [
    { label: t("footer.servicesItems.roadside"), href: "#" },
    { label: t("footer.servicesItems.towing"), href: "#" },
    { label: t("footer.servicesItems.battery"), href: "#" },
    { label: t("footer.servicesItems.fuel"), href: "#" },
    { label: t("footer.servicesItems.tire"), href: "#" },
  ];

  const quickLinks = [
    { label: t("home"), href: "#" },
    { label: t("features"), href: "#" },
    { label: t("team"), href: "#" },
    { label: t("contact"), href: "#" },
    { label: t("footer.quickLinksItems.partner"), href: "/register" },
  ];

  const contactInfo = [
    { icon: <Phone />, text: "+963 930 000 000", label: "Phone" },
    { icon: <Email />, text: "support@carhero.app", label: "Email" },
    { icon: <LocationOn />, text: t("footer.contactItems.address"), label: "Address" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "var(--bg-footer, #0f0a1a)",
        color: "#fff",
        pt: { xs: 10, md: 15 },
        pb: 6,
        borderTop: "2px solid var(--primary-main, #8f5cb1)",
        direction: isRtl ? "rtl" : "ltr",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Elements */}
      <Box sx={{
        position: "absolute",
        top: -100,
        right: isRtl ? "auto" : -100,
        left: isRtl ? -100 : "auto",
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(143, 92, 177, 0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <Container maxWidth="xl">
        <Grid container spacing={8}>
          {/* Column 1: Brand & About */}
          <Grid item xs={12} lg={4}>
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src={logo}
                alt="CarHero"
                sx={{
                  width: "100%",
                  maxWidth: { xs: 200, md: 280 },
                  mb: 4,
                  filter: "brightness(1.2) drop-shadow(0 0 20px rgba(143, 92, 177, 0.3))",
                  display: "block",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.8,
                  mb: 5,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontWeight: 400,
                  maxWidth: 450
                }}
              >
                {t("footer.tagline")}
              </Typography>
              
              <Stack direction="row" spacing={2.5}>
                {socialIcons.map(({ Icon, label, color }, i) => (
                  <motion.div key={i} whileHover={{ y: -6, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <IconButton
                      aria-label={label}
                      sx={{
                        width: 50,
                        height: 50,
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#fff",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          background: color,
                          borderColor: color,
                          boxShadow: `0 12px 28px ${color}77`,
                          transform: "rotate(5deg)",
                        }
                      }}
                    >
                      <Icon />
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Column 2: Links Group */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mb: 4,
                    color: "var(--primary-light, #c196ff)",
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    fontSize: "1.2rem"
                  }}
                >
                  {t("footer.services")}
                </Typography>
                <Stack spacing={2.5}>
                  {serviceLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#fff",
                          pl: isRtl ? 0 : 1,
                          pr: isRtl ? 1 : 0,
                          fontWeight: 600
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mb: 4,
                    color: "var(--primary-light, #c196ff)",
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    fontSize: "1.2rem"
                  }}
                >
                  {t("footer.quickLinks")}
                </Typography>
                <Stack spacing={2.5}>
                  {quickLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#fff",
                          pl: isRtl ? 0 : 1,
                          pr: isRtl ? 1 : 0,
                          fontWeight: 600
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* Column 3: Contact & Newsletter */}
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                mb: 4,
                color: "var(--primary-light, #c196ff)",
                letterSpacing: 0.5,
                textTransform: "uppercase",
                fontSize: "1.2rem"
              }}
            >
              {t("footer.contact")}
            </Typography>
            <Stack spacing={3.5} sx={{ mb: 6 }}>
              {contactInfo.map((item, i) => (
                <Stack key={i} direction="row" spacing={2.5} alignItems="center">
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "16px",
                      background: "linear-gradient(135deg, var(--primary-main, #8f5cb1) 0%, #5e3a8a 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#fff",
                      fontSize: "1.15rem",
                      fontWeight: 500,
                      lineHeight: 1.4
                    }}
                  >
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Footer Bottom */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: 500, fontSize: "1rem" }}
          >
            {t("footer.copyright")}
          </Typography>
          <Stack direction="row" spacing={5}>
            <Link
              href="#"
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "1rem",
                textDecoration: "none",
                fontWeight: 600,
                "&:hover": { color: "var(--primary-light)" }
              }}
            >
              {t("footer.privacyPolicy")}
            </Link>
            <Link
              href="#"
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "1rem",
                textDecoration: "none",
                fontWeight: 600,
                "&:hover": { color: "var(--primary-light)" }
              }}
            >
              {t("footer.termsConditions")}
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;


