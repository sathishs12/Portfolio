import { Box, Skeleton } from "@mui/material";

const ProjectSkeleton: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "stretch",
      flexWrap: "wrap",
      backgroundColor: "white",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
      mb: 4,
    }}
  >
    {/* Image Skeleton */}
    <Box
      sx={{
        width: { xs: "100%", md: "35%" },
        minWidth: { xs: "100%", md: "300px" },
        maxWidth: { md: "350px" },
        height: { xs: "250px", sm: "300px", md: "100%" },
        flexShrink: 0,
      }}
    >
      <Skeleton variant="rectangular" width="100%" height="100%" />
    </Box>

    {/* Content Skeleton */}
    <Box sx={{ flex: 2, p: { xs: 3, sm: 4 }, textAlign: "left" }}>
      <Skeleton variant="text" width="60%" height={28} sx={{ mb: 2 }} />
      <Skeleton variant="text" width="90%" height={20} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="85%" height={20} sx={{ mb: 2 }} />
      <Box sx={{ display: "flex", gap: 2 }}>
        <Skeleton variant="rectangular" width={120} height={36} />
        <Skeleton variant="rectangular" width={120} height={36} />
      </Box>
    </Box>
  </Box>
);
export default ProjectSkeleton;