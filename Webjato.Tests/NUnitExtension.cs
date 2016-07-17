using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Webjato.Tests {
    public static class NUnitExtension {
        public static void CompareObjects(object expected, object actual) {
            var properties = expected.GetType().GetProperties();
            foreach (var property in properties) {
                object expectedValue = property.GetValue(expected, null);
                object actualValue = property.GetValue(actual, null);
                if (!Equals(expectedValue, actualValue)) {
                    Assert.Fail("Property {0}.{1} does not match. Expected: {2} but was: {3}", property.DeclaringType.Name, property.Name, expectedValue, actualValue);
                }
            }
        }
    }
}