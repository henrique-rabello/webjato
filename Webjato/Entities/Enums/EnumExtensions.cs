using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Webjato.Entities.Enums {
    public static class EnumExtensions {
        public static string GetDescription(this Enum value) {
            var descriptionAttribute = (DescriptionAttribute)value.GetType()
                .GetField(value.ToString())
                .GetCustomAttributes(false)
                .Where(a => a is DescriptionAttribute)
                .FirstOrDefault();
            return descriptionAttribute != null ? descriptionAttribute.Description : value.ToString();
        }

        public static TEnum GetByDescription<TEnum>(string description) {
            var type = typeof(TEnum);
            if (!type.IsEnum) {
                throw new ArgumentException("Only Enum types are accepted.");
            }
            FieldInfo[] fields = type.GetFields();
            var field = fields
                            .SelectMany(f => f.GetCustomAttributes(
                                typeof(DescriptionAttribute), false), (
                                    f, a) => new { Field = f, Att = a })
                            .Where(a => ((DescriptionAttribute)a.Att)
                                .Description == description).SingleOrDefault();
            if (field == null) {
                throw new ArgumentException("Could not fetch an value for enum '" + type.Name + "' based on descripiton '" + description + "'.");
            }
            else {
                return (TEnum)field.Field.GetRawConstantValue();
            }
        }
    }
}