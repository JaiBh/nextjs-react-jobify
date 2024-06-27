import { Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";

type CustomFormFieldProps = {
  name: string;
  control: Control<any>;
  labelText?: string;
};

export function CustomFormField({
  name,
  control,
  labelText,
}: CustomFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">
            {labelText ? labelText : name}
          </FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

type CustomFormSelectProp = {
  name: string;
  control: Control<any>;
  list: string[];
  labelText?: string;
};
export function CustomFormSelect({
  name,
  control,
  list,
  labelText,
}: CustomFormSelectProp) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">
            {labelText ? labelText : name}
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {list.map((item, index) => {
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
