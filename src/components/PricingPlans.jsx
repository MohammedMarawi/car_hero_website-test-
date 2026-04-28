import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Switch,
  Tooltip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  CheckCircle,
  Star,
  Chat,
  Speed,
  DirectionsCar,
  EmojiEvents,
  Verified,
  InfoOutlined,
  Smartphone,
} from "@mui/icons-material";

const PricingPlans = () => {
  const { t, i18n } = useTranslation();
  const [isYearly, setIsYearly] = useState(false);
  const isRtl = i18n.language === "ar";

  const freeFeatures = t("pricing.free.features", { returnObjects: true });
  const premiumFeatures = t("pricing.premium.features", {
    returnObjects: true,
  });

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Box
      component="section"
      id="pricing"
      sx={{
        py: { xs: 8, md: 15 },
        px: { xs: 2, sm: 4, md: 8 },
        background: "var(--bg-light)",
        transition: "background-color 0.4s ease",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(143, 92, 177, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "var(--primary)",
                mb: 2,
                fontSize: { xs: "32px", sm: "42px", md: "48px" },
                letterSpacing: "-1px",
              }}
            >
              {t("pricing.title")}
            </Typography>
            <Typography
              sx={{
                color: "var(--text-muted)",
                fontSize: "1.1rem",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              {t("pricing.subtitle")}
            </Typography>

            {/* Billing Toggle */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "var(--card-bg)",
                  padding: "4px",
                  borderRadius: "100px",
                  position: "relative",
                  border: "1px solid var(--border-color)",
                  minWidth: "240px",
                }}
              >
                {/* Sliding Background */}
                <Box
                  component={motion.div}
                  animate={{
                    left: isRtl
                      ? isYearly
                        ? "4px"
                        : "calc(50% + 2px)"
                      : isYearly
                        ? "calc(50% + 2px)"
                        : "4px",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  sx={{
                    position: "absolute",
                    top: "4px",
                    bottom: "4px",
                    width: "calc(50% - 6px)",
                    backgroundColor: "var(--primary)",
                    borderRadius: "100px",
                    zIndex: 1,
                  }}
                />

                {/* Monthly Option */}
                <Box
                  onClick={() => setIsYearly(false)}
                  sx={{
                    flex: 1,
                    textAlign: "center",
                    py: 1.5,
                    px: 3,
                    position: "relative",
                    zIndex: 2,
                    color: !isYearly ? "#fff" : "var(--text-muted)",
                    fontWeight: 700,
                    transition: "color 0.3s ease",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  {t("pricing.monthly")}
                </Box>

                {/* Yearly Option */}
                <Box
                  onClick={() => setIsYearly(true)}
                  sx={{
                    flex: 1,
                    textAlign: "center",
                    py: 1.5,
                    px: 3,
                    position: "relative",
                    zIndex: 2,
                    color: isYearly ? "#fff" : "var(--text-muted)",
                    fontWeight: 700,
                    transition: "color 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  {t("pricing.yearly")}
                  <Box
                    sx={{
                      background: "#10b981",
                      color: "#fff",
                      px: 0.8,
                      py: 0.2,
                      borderRadius: "4px",
                      fontSize: "11px",
                      fontWeight: 800,
                    }}
                  >
                    -20%
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Free Plan */}
          <Grid
            item
            xs={12}
            sm={5}
            md={5}
            lg={4.5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{ display: "flex", width: "100%", maxWidth: 400 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  width: "100%",
                  minHeight: { xs: 520, md: 580 },
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "32px",
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--border-color)",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  position: "relative",
                  "&:hover": {
                    borderColor: "var(--primary)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  {t("pricing.free.name")}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "baseline", mb: 4 }}>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 800, color: "var(--text-dark)" }}
                  >
                    $0
                  </Typography>
                  <Typography sx={{ color: "var(--text-muted)", ml: 1 }}>
                    /{t("pricing.monthly").toLowerCase()}
                  </Typography>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                  {freeFeatures.map((feature, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2.5,
                      }}
                    >
                      <CheckCircle
                        sx={{
                          color: "var(--primary)",
                          opacity: 0.6,
                          fontSize: 20,
                        }}
                      />
                      <Typography
                        sx={{ color: "var(--text-dark)", fontSize: "0.95rem" }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                  {/* Grayed out features for free plan */}
                  <Box
                    sx={{
                      mt: 2,
                      pt: 2,
                      borderTop: "1px dashed var(--border-color)",
                      opacity: 0.4,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ display: "block", mb: 1, fontWeight: 700 }}
                    >
                      PREMIUM FEATURES
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 1.5,
                      }}
                    >
                      <CheckCircle
                        sx={{ color: "var(--text-muted)", fontSize: 18 }}
                      />
                      <Typography
                        sx={{
                          color: "var(--text-muted)",
                          fontSize: "0.85rem",
                          textDecoration: "line-through",
                        }}
                      >
                        {premiumFeatures[0]}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ mt: "auto", pt: 4 }}>
                  <button
                    className="register-btn"
                    style={{
                      width: "100%",
                      opacity: 0.8,
                      background: "var(--text-muted)",
                    }}
                  >
                    {t("pricing.cta_app")}
                  </button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Premium Plan */}
          <Grid
            item
            xs={12}
            sm={5}
            md={5}
            lg={4.5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{ display: "flex", width: "100%", maxWidth: 400 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  width: "100%",
                  minHeight: { xs: 520, md: 580 },
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "32px",
                  backgroundColor: "var(--card-bg)",
                  border: "2px solid var(--primary)",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: "var(--primary-light)",
                    boxShadow: "0 30px 60px rgba(143, 92, 177, 0.25)",
                    "&:after": {
                      opacity: 1,
                    },
                    "& .premium-shine": {
                      left: "150%",
                    },
                  },
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "32px",
                    border: "2px solid transparent",
                    background:
                      "linear-gradient(45deg, var(--primary), transparent, var(--primary)) border-box",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  },
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: "300px",
                    height: "300px",
                    background:
                      "radial-gradient(circle, rgba(143, 92, 177, 0.2) 0%, transparent 70%)",
                    zIndex: 0,
                    transition: "transform 0.6s ease",
                  },
                }}
              >
                {/* Shine effect layer */}
                <Box
                  className="premium-shine"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "-50%",
                    width: "30%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)",
                    transform: "skewX(-20deg)",
                    transition: "left 0.8s ease",
                    zIndex: 1,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "var(--primary)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {t("pricing.premium.name")}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    mb: 4,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isYearly ? "yearly" : "monthly"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: "flex", alignItems: "baseline" }}
                    >
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: 800, color: "var(--text-dark)" }}
                      >
                        $
                        {isYearly
                          ? t("pricing.premium.price_yearly")
                          : t("pricing.premium.price_monthly")}
                      </Typography>
                      <Typography sx={{ color: "var(--text-muted)", ml: 1 }}>
                        /
                        {isYearly
                          ? t("pricing.yearly").toLowerCase()
                          : t("pricing.monthly").toLowerCase()}
                      </Typography>
                    </motion.div>
                  </AnimatePresence>
                </Box>

                <Box sx={{ flexGrow: 1, position: "relative", zIndex: 1 }}>
                  {premiumFeatures.map((feature, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2.5,
                      }}
                    >
                      <CheckCircle
                        sx={{ color: "var(--primary)", fontSize: 22 }}
                      />
                      <Typography
                        sx={{
                          color: "var(--text-dark)",
                          fontSize: "1rem",
                          fontWeight: 600,
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: "auto",
                    pt: 4,
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <button className="register-btn" style={{ width: "100%" }}>
                    {t("pricing.cta_upgrade")}
                  </button>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <Smartphone
                      sx={{ color: "var(--text-muted)", fontSize: 16 }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: "var(--text-muted)" }}
                    >
                      {t("pricing.app_only_note")}
                    </Typography>
                    <Tooltip
                      title={t("pricing.app_only_note")}
                      placement="top"
                      arrow
                    >
                      <InfoOutlined
                        sx={{
                          fontSize: 14,
                          color: "var(--primary)",
                          cursor: "pointer",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingPlans;
