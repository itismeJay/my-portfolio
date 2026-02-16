import {
  CheckCircle,
  Calendar,
  Mail,
  FileText,
  ChevronRight,
  Moon,
  Sun,
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { useTheme } from "@/components/ThemeProvider";

const HeroSection = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
      {/* Profile Photo */}
      <div
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden flex-shrink-0 border border-border"
        style={{ backgroundColor: "hsl(var(--card))" }}
      >
        <img
          src={profilePhoto}
          alt="Rb Jay Salamanes"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Rb Jay Salamanes
              </h1>
              <CheckCircle className="w-5 h-5 text-primary fill-primary" />
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              📍 Metro Manila, Philippines
            </p>
            <p className="text-secondary-foreground text-sm mb-4">
              AI \ Software Engineer \ Content Creator
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-badge-bg text-badge-text text-xs font-medium">
              🏆 DICT OpenGov Hackathon 2025 Champion
              <ChevronRight className="w-3 h-3" />
            </span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-foreground" />
              ) : (
                <Moon className="w-4 h-4 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-accent transition-colors text-sm font-medium text-foreground border border-border">
            <Calendar className="w-4 h-4" />
            Schedule a Call
            <ChevronRight className="w-3 h-3" />
          </button>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg hover:bg-secondary transition-colors text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            Send Email
          </button>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg hover:bg-secondary transition-colors text-sm text-muted-foreground">
            <FileText className="w-4 h-4" />
            Read my blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
