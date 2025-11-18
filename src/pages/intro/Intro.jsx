import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-2xl">
        <Item variant="outline" className="w-full">
          <ItemContent>
            <ItemTitle className="text-3xl">Welcome to PDF Manager</ItemTitle>
            <ItemDescription className="text-lg">
              Upload, view, and manage your PDFs securely.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button asChild variant="outline">
              <Link to="/login">Get Started</Link>
            </Button>
          </ItemActions>
        </Item>
      </div>
    </div>
  );
}
