import Image from "next/image";

export function AiGeneratedBadge() {
  return (
    <span className="ai-generated-badge" aria-hidden="true">
      <Image
        src="/eu-ai-generated.svg"
        alt=""
        width={160}
        height={51}
        className="ai-generated-badge-icon"
        unoptimized
      />
    </span>
  );
}
